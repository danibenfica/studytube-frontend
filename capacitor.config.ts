import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.danibenfica.studytube",
  appName: "StudyTube",
  webDir: "dist",
  android: {
    // O app só fala com a API por HTTPS (HTTP sem criptografia fica bloqueado).
    allowMixedContent: false,
  },
};

export default config;
