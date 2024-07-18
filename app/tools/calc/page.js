import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata = {
  title: "KhalidBI | حاسبة النظام الجديد",
  description: "حاسبة تساعدك عل يالتعرف على الراتب مع النظام الجديد وحسم التأمينات منه",
  openGraph: {
    title: 'KhalidBI',
    description: 'حاسبة النظام الجديد',
    url: 'https://khalidbi.pro/tools/calc',
    images: [
      {
        url: '/calc-og-image.png',
        width: 1200,
        height: 630,
        alt: 'calc banner'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};


const SalaryCalculatorPage = () => {
  return (
    <div>
      <SalaryCalculator />
    </div>
  );
};

export default SalaryCalculatorPage;
