import { Key, SWRConfiguration } from "swr";
import useSWRImmutable from "swr/immutable";

export async function fetcher<T>(url: string, options?: RequestInit) {
  const res = await fetch(url, options);

  if (res.status !== 200) {
    throw new Error(res.statusText);
  }

  return (await res.json()) as T;
}

export function useDataFetch<Data, Error = any>(
  key: Key,
  config?: SWRConfiguration
) {
 
  return useSWRImmutable<Data, Error>(key, fetcher, config);
}
  