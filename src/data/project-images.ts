import chiluda400 from '../images/optimized/chiluda-400.webp';
import chiluda640 from '../images/optimized/chiluda-640.webp';
import chiluda960 from '../images/optimized/chiluda-960.webp';
import chiluda1440 from '../images/optimized/chiluda-1440.webp';
import martha400 from '../images/optimized/martha-400.webp';
import martha640 from '../images/optimized/martha-640.webp';
import martha960 from '../images/optimized/martha-960.webp';
import martha1440 from '../images/optimized/martha-1440.webp';
import inred400 from '../images/optimized/inred-home-400.webp';
import inred640 from '../images/optimized/inred-home-640.webp';
import inred960 from '../images/optimized/inred-home-960.webp';
import inred1339 from '../images/optimized/inred-home-1339.webp';
import work400 from '../images/optimized/inred-work-400.webp';
import work682 from '../images/optimized/inred-work-682.webp';

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

export const projectImages = {
  chiluda: {
    src: chiluda960,
    srcSet: `${chiluda400} 400w, ${chiluda640} 640w, ${chiluda960} 960w, ${chiluda1440} 1440w`,
    width: 1892, height: 903,
  },
  martha: {
    src: martha960,
    srcSet: `${martha400} 400w, ${martha640} 640w, ${martha960} 960w, ${martha1440} 1440w`,
    width: 1906, height: 909,
  },
  inredHome: {
    src: inred960,
    srcSet: `${inred400} 400w, ${inred640} 640w, ${inred960} 960w, ${inred1339} 1339w`,
    width: 1339, height: 536,
  },
  inredWork: {
    src: work682,
    srcSet: `${work400} 400w, ${work682} 682w`,
    width: 682, height: 485,
  },
} satisfies Record<string, ResponsiveImage>;
