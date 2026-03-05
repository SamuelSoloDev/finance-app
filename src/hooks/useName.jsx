import { useState, useEffect } from "react";
import { getName, saveName, deleteName } from "../db/user";

export function useName() {
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const user = await getName();
    setName(user || null)
    setLoading(false);
  }

  async function erase() {
    await deleteName()
  }

  async function update(newName) {
    const user = await getName();

    const updatedUser = {
      ...user,
      name: newName,
    };

    await saveName(updatedUser);
    setName(newName);
  }

  return {
    name,
    update,
    reload: load,
    loading,
    erase,
  };
}
