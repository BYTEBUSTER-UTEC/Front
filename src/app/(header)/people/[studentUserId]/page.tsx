"use client"; // Asegúrate de que este código sea del lado del cliente si se necesita.

import { CompanyProfile } from "@/components/companies/profile";
import OtherProfile from "@/components/otherprofile";
import React from "react";

export default function Page({ params }: { params: { studentUserId: string } }) {
  
    return (
    <main>

      <OtherProfile params={params} />
    </main>
  );
}

// export default function Page() {
//   return (
//     <main>
//       <h1></h1>
//     </main>
//   );
// }
