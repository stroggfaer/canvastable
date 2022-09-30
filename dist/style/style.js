"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PIXEL_RATIO = exports.DEFAULT_STYLE = void 0;
const DEFAULT_STYLE = {
  width: '100%',
  height: '100%',
  rowHeight: 55,
  columnWidth: 150,
  borderColor: '#e8e8e8',
  textColor: 'rgba(0,0,0,0.65)',
  fontSize: '14px',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  headerBackColor: '#fafafa',
  headerRowHeight: 55,
  padding: 16
};
exports.DEFAULT_STYLE = DEFAULT_STYLE;

const PIXEL_RATIO = (() => {
  const ctx = document.createElement('canvas').getContext('2d'),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx['webkitBackingStorePixelRatio'] || ctx['mozBackingStorePixelRatio'] || ctx['msBackingStorePixelRatio'] || ctx['oBackingStorePixelRatio'] || ctx['backingStorePixelRatio'] || 1;
  const ratio = dpr / bsr;
  return ratio < 1 ? 1 : ratio;
})();

exports.PIXEL_RATIO = PIXEL_RATIO;