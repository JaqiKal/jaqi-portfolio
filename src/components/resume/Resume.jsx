/** <components/section/Resume.jsx>
 * This file contains the Resume component.
 */
const Resume = () => (
  <section
    id="resume"
    className="bg-tertiary-500 text-neutral-100 dark:text-neutral-200 px-4 sm:px-8 py-8 sm:py-12"
  >
    {/* Profile Card */}
    <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Profil</h2>
      <p className="text-base sm:text-lg leading-relaxed">
        Jag är en strukturerad och analytisk problemlösare med erfarenhet av logistik, administration, ärendehandläggning och processförbättring. Med en bakgrund inom projektledning, kundservice och verksamhetsutveckling har jag utvecklat en stark
        förmåga att planera, koordinera och optimera arbetsflöden.
      </p>
    </div>

    {/* Skills Accordion */}
    <div className="mt-8 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Kompetensöversikt</h2>
      {/* Accordion Component */}
      {/* Expandable areas with icons */}
    </div>

    {/* Work Experience Cards */}
    <div className="mt-8 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-primary-500 inline-block mb-6 sm:mb-8">Arbetsliv</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1st Internship Card */}
        <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Praktik LIA-2</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">GardenStore Nordic AB</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex flex-col text-center rounded-lg shadow-lg overflow-hidden min-w-[4rem]">
              <div className="bg-gray-800 text-gray-100 py-1 sm:py-2 px-1">
                <span className="font-semibold">Apr 2023</span>
              </div>
              <div className="bg-gray-200 text-gray-800 py-1 sm:py-2 px-1">
                <span className="font-semibold">Feb 2023</span>
              </div>
            </div>
            <ul className="list-disc ml-4 text-sm sm:text-base">
              <li>Lagerflödesanalys och orderhantering</li>
              <li>Transportprocesser och distributionsanalyser</li>
              <li>Miljö- och kvalitetsledningsarbete</li>
            </ul>
          </div>
        </div>

        {/* 2nd Internship Card */}
        <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Praktik LIA-1</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">GardenStore Nordic AB</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex flex-col text-center rounded-lg shadow-lg overflow-hidden min-w-[4rem]">
              <div className="bg-gray-800 text-gray-100 py-1 sm:py-2 px-1">
                <span className="font-semibold">Jun 2022</span>
              </div>
              <div className="bg-gray-200 text-gray-800 py-1 sm:py-2 px-1">
                <span className="font-semibold">Apr 2022</span>
              </div>
            </div>
            <ul className="list-disc ml-4 text-sm sm:text-base">
              <li>ERP (MS Business Central), WMS (Ongoing), Magento 2</li>
              <li>Produktmappning, kategorisering och inköpsanalyser</li>
              <li>SEO-optimering och marknadsanalys</li>
              <li>Innehållsskribent</li>
            </ul>
          </div>
        </div>

        {/* 1st Experience Card */}
        <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Kundservice, e-handel, lagerlogistik</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">Wexthuset Sverige AB</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex flex-col text-center rounded-lg shadow-lg overflow-hidden min-w-[4rem]">
              <div className="bg-gray-800 text-gray-100 py-1 sm:py-2 px-1">
                <span className="font-semibold">2022</span>
              </div>
              <div className="bg-gray-200 text-gray-800 py-1 sm:py-2 px-1">
                <span className="font-semibold">2015</span>
              </div>
            </div>
            <ul className="list-disc ml-4 text-sm sm:text-base">
              <li>Kundservice och reklamationshantering</li>
              <li>Order- och returflöden samt koordinering med speditörer</li>
              <li>Processoptimering och systematisk ärendehantering</li>
              <li>Användning av CRM-system, e-handelsplattformar, WMS</li>
            </ul>
          </div>
        </div>

        {/* 2nd Experience Card */}
        <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Projektadministratör, Projektledare</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">Ericsson AB</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex flex-col text-center rounded-lg shadow-lg overflow-hidden min-w-[4rem]">
              <div className="bg-gray-800 text-gray-100 py-1 sm:py-2 px-1">
                <span className="font-semibold">2015</span>
              </div>
              <div className="bg-gray-200 text-gray-800 py-1 sm:py-2 px-1">
                <span className="font-semibold">1990</span>
              </div>
            </div>
            <ul className="list-disc ml-4 text-sm sm:text-base">
              <li>Resursplanering, kapacitetsanalys och tidskritiska leveranser</li>
              <li>Informationshantering och digitala system</li>
              <li>Koordinering och samverkan med internationella aktörer</li>
              <li>Systematisk planering och processutveckling</li>
            </ul>
          </div>
        </div>

        {/* 3d Experience Card */}
        <div className="bg-neutral-800/70 backdrop-blur rounded-xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Administratör, Kundservice</h3>
          <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">S:t Görans Sjukhus</p>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex flex-col text-center rounded-lg shadow-lg overflow-hidden min-w-[4rem]">
              <div className="bg-gray-800 text-gray-100 py-1 sm:py-2 px-1">
                <span className="font-semibold">1989</span>
              </div>
              <div className="bg-gray-200 text-gray-800 py-1 sm:py-2 px-1">
                <span className="font-semibold">1988</span>
              </div>
            </div>
            <ul className="list-disc ml-4 text-sm sm:text-base">
              <li>Registrerade patienter och hanterade administrativa ärenden, såsom tidsbokningar, registrering av personuppgifter, remisser och andra dokument</li>
              <li>Ansvarade för kassahantering och betalningar, hanterade patientavgifter, fakturor samt enklare ekonomiska transaktioner noggrant och effektivt</li>
              <li>Gav tydlig och empatisk vägledning, hjälpte patienter och anhöriga att navigera rätt på sjukhuset, svarade på frågor, och hanterade utmanande och stressiga situationer med lugn och professionalism</li>
              <li>Samarbetade nära med vårdpersonal och administrativa enheter, bidrog till ett smidigt patientflöde och effektiv kommunikation mellan olika avdelningar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
