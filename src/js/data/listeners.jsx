import { useSyncExternalStore } from "react";

export function useWindowWidth() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize',callback);
      return ()=> window.removeEventListener('resize',callback);
    },
    ()=>{
      return window.innerWidth;
    }
  );
}
export function useWindowHeight() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener('resize',callback);
      return ()=> window.removeEventListener('resize',callback);
    },
    ()=>{
      return window.innerHeight;
    }
  );
}