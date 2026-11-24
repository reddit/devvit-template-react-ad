import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => (
  <main className="flex min-h-screen items-center justify-center bg-[#f6f7f8] p-6 text-[#1c1c1c]">
    <section className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#576f76]">
        Interactive ad
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Your campaign starts here
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-[#57606a]">
        Replace this with your campaign story, product, or experience.
      </p>
    </section>
  </main>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
