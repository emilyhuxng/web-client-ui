import { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import {
  StorageTableViewport,
  ViewportData,
  ViewportUpdateCallback,
} from '@deephaven/storage';
import Log from '@deephaven/log';
import {
  CommandHistoryStorageItem,
  CommandHistoryTable,
} from './CommandHistoryStorage';

export type CommandHistoryViewportUpdaterProps = {
  table: CommandHistoryTable;
  columns?: string[];
  top?: number;
  bottom?: number;
  search?: string;
  isReversed?: boolean;
  onUpdate: ViewportUpdateCallback<CommandHistoryStorageItem>;
};

const SET_SEARCH_DEBOUNCE_MS = 150;

const UPDATE_DELAY = 150;

const ROW_BUFFER_PAGES = 3;

const log = Log.module('CommandHistoryViewportUpdater');

function CommandHistoryViewportUpdater({
  table,
  columns,
  top = 0,
  bottom = 0,
  search,
  isReversed = false,
  onUpdate,
}: CommandHistoryViewportUpdaterProps): null {
  const debounceSetSearch = useMemo(
    () =>
      debounce((searchText?: string) => {
        table.setSearch(searchText ?? '');
      }, SET_SEARCH_DEBOUNCE_MS),
    [table]
  );

  const throttledUpdateViewport = useMemo(
    () =>
      throttle((viewport: StorageTableViewport) => {
        const viewHeight = viewport.bottom - viewport.top;
        const bufferedTop = Math.max(
          0,
          viewport.top - viewHeight * ROW_BUFFER_PAGES
        );
        const bufferedBottom = viewport.bottom + viewHeight * ROW_BUFFER_PAGES;

        table.setViewport({
          top: bufferedTop,
          bottom: bufferedBottom,
          columns: viewport.columns,
        });
      }, UPDATE_DELAY),
    [table]
  );

  useEffect(
    function updateTableAndReturnCleanup() {
      const cleanup = table.onUpdate(
        (viewportData: ViewportData<CommandHistoryStorageItem>) => {
          onUpdate({
            items: viewportData.items ?? [],
            offset: viewportData.offset ?? 0,
          });
        }
      );

      return () => {
        log.debug('onUpdate cleanup');
        cleanup();
      };
    },
    [table, onUpdate]
  );

  useEffect(
    function setSearchText() {
      debounceSetSearch(search);
    },
    [debounceSetSearch, search]
  );
  useEffect(
    function updateViewport() {
      throttledUpdateViewport({
        top,
        bottom,
        columns,
      });
    },
    [throttledUpdateViewport, top, bottom, columns, search, isReversed]
  );
  useEffect(
    () => () => {
      log.debug2('Cancel throttledUpdateViewport');
      throttledUpdateViewport.cancel();
    },
    [throttledUpdateViewport]
  );

  return null;
}

export default CommandHistoryViewportUpdater;
