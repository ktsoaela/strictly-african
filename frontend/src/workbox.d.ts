interface WBManifestEntry {
    url: string;
    revision?: string;
  }
  
  interface Window {
    __WB_MANIFEST: WBManifestEntry[];
  }