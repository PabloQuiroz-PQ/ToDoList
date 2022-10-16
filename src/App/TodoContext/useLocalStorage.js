import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItems) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage }