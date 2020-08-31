import React, { useEffect } from 'react';

export default function IntelliJRestCli() {
  useEffect(() => {
    window.location = 'https://restcli.github.io';
  }, []);
  return (
    <div>Redirecting to: https://restcli.github.io</div>
  );
}
