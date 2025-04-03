import { NextPage } from 'next';
import Seo from '@/components/Seo';

const TermsAndConditions: NextPage = () => {
  return (
    <>
      <Seo title='Terms and Conditions' />
      <main className='layout my-26 mx-auto mt-36 max-w-4xl space-y-8 px-4'>
        <h1 className='text-center text-4xl font-bold text-primary-base'>
          Terms and Conditions for IT Services, Software, and Website
          Development
        </h1>
        <p className='text-center text-lg text-gray-600'>
          Effective Date: January 1, 2024
        </p>

        {/* Introduction Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            1. Introduction
          </h2>
          <p className='text-gray-700'>
            These Terms and Conditions ("Terms") govern the relationship between
            [Company Name] ("the Company") and the Client ("the Client")
            regarding IT services, software development, and website
            development. By engaging our services, the Client agrees to these
            Terms.
          </p>
        </section>

        {/* Services Provided Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            2. Services Provided
          </h2>
          <p className='text-gray-700'>
            The Company offers a range of services including but not limited to:
          </p>
          <ul className='ml-5 list-disc text-gray-700'>
            <li>Software development</li>
            <li>Website design and development</li>
            <li>IT consulting</li>
            <li>Maintenance and support</li>
          </ul>
        </section>

        {/* Client Obligations Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            3. Client Obligations
          </h2>
          <p className='text-gray-700'>
            The Client shall provide accurate and timely information necessary
            for the execution of services. The Client is responsible for
            obtaining any necessary permissions or licenses for materials used
            in the project.
          </p>
        </section>

        {/* Project Timeline Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            4. Project Timeline
          </h2>
          <p className='text-gray-700'>
            The Company will provide an estimated timeline for project
            completion. Delays caused by the Client's actions may result in
            adjustments to the timeline.
          </p>
        </section>

        {/* Payment Terms Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            5. Payment Terms
          </h2>
          <p className='text-gray-700'>
            Fees for services are detailed in the project proposal. Payment
            schedules (e.g., upfront, milestones, or upon completion) will be
            specified in the agreement. Late payments may incur interest and
            additional fees as outlined in the agreement.
          </p>
        </section>

        {/* Intellectual Property Rights Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            6. Intellectual Property Rights
          </h2>
          <p className='text-gray-700'>
            Upon full payment, the Client will own the rights to the final
            deliverables. The Company retains the right to use project materials
            for promotional purposes unless otherwise agreed.
          </p>
        </section>

        {/* Warranty and Limitation of Liability Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            7. Warranty and Limitation of Liability
          </h2>
          <p className='text-gray-700'>
            The Company warrants that services will be performed in a
            professional manner. However, the Company is not liable for any
            indirect, incidental, or consequential damages arising from the use
            of its services. Claims must be made in writing within [specified
            time frame] of project delivery.
          </p>
        </section>

        {/* Confidentiality Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            8. Confidentiality
          </h2>
          <p className='text-gray-700'>
            Both parties agree to keep confidential any proprietary information
            shared during the project. This obligation survives the termination
            of the agreement.
          </p>
        </section>

        {/* Termination Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            9. Termination
          </h2>
          <p className='text-gray-700'>
            Either party may terminate the agreement with written notice if the
            other party fails to meet its obligations. The Client is responsible
            for payment for any work completed up to the termination date.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            10. Governing Law
          </h2>
          <p className='text-gray-700'>
            These Terms are governed by the laws of [Jurisdiction]. Any disputes
            will be resolved in the courts of [Jurisdiction].
          </p>
        </section>

        {/* Amendments Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            11. Amendments
          </h2>
          <p className='text-gray-700'>
            The Company reserves the right to amend these Terms at any time.
            Clients will be notified of any significant changes.
          </p>
        </section>

        {/* Contact Information Section */}
        <section className='space-y-5'>
          <h2 className='text-2xl font-semibold text-primary-base'>
            12. Contact Information
          </h2>
          <p className='text-gray-700'>
            For questions or concerns about these Terms, please contact us at{' '}
            <a
              href='mailto:info@gvs-bh.com'
              className='text-primary-base underline'
            >
              info@gvs-bh.com
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default TermsAndConditions;
