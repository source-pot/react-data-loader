import {demoData} from "./demoData.ts";

/**
 * This is a fake async function that simulates loading a user from an API
 */
export async function loadUser(): Promise<typeof demoData> {
  return new Promise((resolve) => setTimeout(() => resolve(demoData), 2000))
}
