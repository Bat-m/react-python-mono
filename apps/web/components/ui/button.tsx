"use client";

export function Button() {
  return (
    <button onClick={(): void => alert("booped")} type="button">
      Boop
    </button>
  );
}
