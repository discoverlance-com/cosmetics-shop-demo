import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import { useInterval } from "usehooks-ts";

import ThePrimaryLayout from "~/components/UI/layout/ThePrimaryLayout";
import HomeProducts from "~/components/pages/home/HomeProducts";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const products = await fetch(url.href + "__data/products.json");
  const productsData = await products.json();
  return json({ products: productsData });
};

export default function Index() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const title = "Cosmetics";

  useInterval(() => {
    if (titleRef.current) {
      const target = titleRef.current;
      if (target.innerText.length < title.length) {
        target.innerText = title.substring(0, target.innerText.length + 1);
      } else {
        target.innerText = "";
      }
    }
  }, 300);

  const { products } = useLoaderData<typeof loader>();
  return (
    // bg-hero-image bg-no-repeat bg-cover w-full h-96
    <ThePrimaryLayout>
      <>
        <header className="flex items-center justify-center bg-hero-image bg-no-repeat bg-cover w-full h-[500px] relative rounded">
          <div className="absolute inset-0 bg-opacity-10 bg-blue-50"></div>
          <h1 className="font-bold text-center">
            <span className="text-5xl">Welcome to</span>
            <span className="tracking-wider block text-7xl pt-2 uppercase">
              My <span ref={titleRef}>{title}</span>
            </span>
          </h1>
        </header>

        <HomeProducts products={products} />
      </>
    </ThePrimaryLayout>
  );
}
