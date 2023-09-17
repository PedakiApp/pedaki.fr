import { Separator } from '@pedaki/design/ui/separator';
import AboutUs from '~/app/about/about-us';
import Assets from '~/app/about/assets';
import Naming from '~/app/about/naming';
import { PageHeader } from '~/components/PageHeader';
import { pageBaseStyle } from '~/styles/constants';
import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  title: 'Company',
};

const CompanyPage = () => {
  return (
    <div className={pageBaseStyle}>
      <PageHeader
        title="A propos de pedaki"
        description="Page qui regroupe nos assets et informations sur pedaki."
      />
      <div className="mt-8 container">
        <Separator gradient="gray" className="mb-8"/>
        <div className="flex flex-col gap-16">
          <AboutUs />
          <Naming />
          <Assets />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;