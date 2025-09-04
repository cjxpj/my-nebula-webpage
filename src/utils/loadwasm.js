import wasmExecUrl from "@/assets/tool/wasm_exec.js?url";
import wasmUrl from "@/assets/tool/hajimimanbo.wasm?url";

async function loadScript(url) {
  if (!window.Go) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}

export async function initWasm() {
  await loadScript(wasmExecUrl);

  const go = new Go();
  const response = await fetch(wasmUrl);
  const bytes = await response.arrayBuffer();
  const result = await WebAssembly.instantiate(bytes, go.importObject);
  go.run(result.instance);

  return {
    encrypt: (key, text) => window.encrypt(key, text),
    decrypt: (key, text) => window.decrypt(key, text),
  };
}
