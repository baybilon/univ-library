import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import BookForms from "@/components/admin/forms/BookForms";

const Page = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go back</Link>
      </Button>
      <section className="w-full max-w-2xl">
        <BookForms />
      </section>
    </>
  );
};

export default Page;
