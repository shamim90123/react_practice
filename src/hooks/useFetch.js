// Custom React hooks for code reuse.
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then((res) => res.json()).then(setData);
  }, [url]);

  return data;
}
