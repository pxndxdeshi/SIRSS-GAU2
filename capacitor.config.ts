import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sgau.app',
  appName: 'SGAU Wanchaq',
  webDir: 'public',
  server: {
    url: 'https://sirss-gau-2.vercel.app',
    cleartext: true
  }
};

export default config;
