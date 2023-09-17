import { Separator } from '@pedaki/design/ui/separator';
import Faq from '~/app/pricing/faq';
import PriceTable from '~/app/pricing/price-table';
import { PageHeader } from '~/components/PageHeader';
import { pageBaseStyle } from '~/styles/constants';
import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Pricing',
};

const PricingPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader
        title="Trouve une offre qui te convient"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <div className="container mt-8">
        {/* z-[2] is required as we use a blur hack in PriceTable */}
        <Separator gradient="gray" className="z-[2] relative" />
        <PriceTable />
        <Faq />
      </div>
    </div>
  );
};

export default PricingPage;