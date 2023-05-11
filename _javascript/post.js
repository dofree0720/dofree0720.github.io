import { basic, initSidebar, initTopbar } from '../../../_javascript/modules/layouts';
import {
  imgExtra,
  initLocaleDatetime,
  initClipboard,
  smoothScroll,
  initPageviews,
  toc
} from '../../../_javascript/modules/plugins';

basic();
initSidebar();
initTopbar();
imgExtra();
initLocaleDatetime();
initClipboard();
toc();
smoothScroll(); // must be called after toc is created
initPageviews();
