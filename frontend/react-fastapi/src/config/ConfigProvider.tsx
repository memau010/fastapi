import React, { createContext, useEffect, useState } from "react";
import type { AppConfig } from "../../config/types";

export const ConfigContext = createContext<AppConfig | null>(null);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    fetch("/config.json")
      .then(res => res.json())
      .then((data: AppConfig) => setConfig(data))
      .catch(console.error);
  }, []);

  if (!config) return <div>Loading config…</div>;

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}
