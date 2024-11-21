import {demoData} from "../demoData.ts";

export async function loadUser(): Promise<typeof demoData> {
  return new Promise((resolve) => setTimeout(() => resolve(demoData), 2000))
}