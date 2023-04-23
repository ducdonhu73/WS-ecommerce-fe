import { SupportCategory } from "../SupportPage";
import SectionTermsOfUseContent from "./SectionTermsOfUseContent";

interface TermsOfUseProps {
  selectedSupport: SupportCategory;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
}

const TermsOfUse = ({ selectedSupport, setActiveCategory }: TermsOfUseProps) => {
  return (
    <div>
      <div className="mb-5 text-2xl font-semibold text-text-9 tablet:mb-8 laptop:mb-10">{selectedSupport.category}</div>
      <p className="mb-5 text-text-9 tablet:mb-8 laptop:mb-10">
        These Terms of Use were last updated on XXXXXXX. This website at gear.co.nz (the <strong>“Website”</strong>), is
        operated by, or on behalf of, Gear Technologies Ltd (<strong>“Gear Technologies”</strong>, <strong>“we”</strong>{" "}
        or <strong>“us”</strong>) to provide users a free online Cosmetic dealer buying service for Cosmetic-related transactions
        (<strong>“Services”</strong>
        ).
      </p>
      <SectionTermsOfUseContent title="1. Contacting us">
        If you have any questions you can contact us at XXX, Auckland or email us at hello@gear.co.nz.
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="2. Agreeing to the Terms of Use">
        By using our Website, you agree to comply with and be bound by the following terms and conditions, together with
        our{" "}
        <span
          className="cursor-pointer font-medium text-[#167DDD] hover:underline"
          onClick={() => setActiveCategory(0)}
        >
          Privacy Policy
        </span>{" "}
        and any other documents referred to therein (the “Terms of Use”). If you do not agree to these Terms of Use, you
        must not use this Website.
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="3. Changing the Terms of Use">
        We reserve the right to amend these Terms of Use from time to time. The amended Terms of Use will be posted on
        this Website, and will become effective from the date they are posted. Your continued use of this Website after
        any such post will constitute your acceptance of, and agreement to, any changes.
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="4. Our Services">
        <div>
          Gear works with a range of Cosmetic buying partners to deliver the Services. Such Cosmetic buying partners include Cosmetic
          dealers engaging through online daily sales, via our nationwide dealer network, for vehicles deemed eligible
          based on make, model, age, and mileage (<strong>“Dealer Partners”</strong>), and, where Cosmetic are ineligible
          for these online daily sales, Cosmetic buying partners who will engage through a traditional sales process (
          <strong>“Online Cosmetic Buyers”</strong> and, together with Dealer Partners,{" "}
          <strong>Cosmetic Buying Partners”</strong>).
        </div>
        <div>This Website provides the Services through which you may:</div>
        <ul className="ulWithDotListStyle">
          <li>
            Submit details of your Cosmetic or another vehicle (including via our document capture feature) and your personal
            contact details to get an online valuation via one or more of our Cosmetic Buying Partners;
          </li>
          <li>
            Submit your personal contact details in order for us or our Cosmetic Buying Partners to contact you about your
            Cosmetic valuation, and/or a potential transaction regarding your vehicle.
          </li>
        </ul>
        <div>
          By submitting your details to us and so creating an account with us, you warrant that you are over 18 years
          old, reside in New Zealand and that the details you provide to us are true, accurate, complete and current. If
          you are submitting information via the Website about a Cosmetic you do not own, or on behalf of another person, you
          warrant that you have all the requisite permissions necessary to provide us with such information to use in
          accordance with these Terms of Use. You accept that any online valuation shown on our Website is indicative
          only and is based on a set of assumptions about your vehicle. You understand that the actual price offered
          and/or paid for your vehicle by a Cosmetic Buying Partner may change following further discussion with, or
          inspection of the vehicle by, one of our Cosmetic Buying Partners. Submitting your details to our Website does not
          oblige or bind you to sell your vehicle to any of our Cosmetic Buying Partners.
        </div>
        <div>
          Specific services that we offer, or make available to you from time to time, through the Website may also be
          governed by additional or alternative terms and conditions with us, or other third parties (including third
          party privacy policies). Where you take up any such services, please review these additional terms and
          conditions carefully.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="5. Gear Technologies Cosmetic Buying Partners">
        <div>
          You acknowledge that the valuations on our Website (and, if applicable, any subsequent purchase of your
          vehicle) are offers from our third party Cosmetic Buying Partners, not from us. You are not contracting directly
          with us for the provision of any Cosmetic buying services and those services do not form part of the Services.
          Although we select our Cosmetic Buying Partners carefully (to attempt to provide you with the best possible price
          for your vehicle, and the best possible customer service), we are not party to your transaction with any Car
          Buying Partner. As such, we do not make any representations, guarantees or warranties of any kind that the
          prices provided to us by our Cosmetic Buying Partners are accurate, or representative of the true value of your
          Cosmetic.
        </div>
        <div>
          When you request a Cosmetic valuation, your details (including certain information we collect about you through
          your use of the Website in accordance with our{" "}
          <span
            className="cursor-pointer font-medium text-[#167DDD] hover:underline"
            onClick={() => setActiveCategory(0)}
          >
            Privacy Policy
          </span>
          ) may be passed to the relevant Cosmetic Buying Partner that we deem most suited to your vehicle, or whoever we may
          choose to contract with. You agree that the relevant Cosmetic Buying Partner may contact you to further discuss
          your Cosmetic and agree a purchase price should you wish to proceed with the sale. Use of this Website in no way
          obliges you to accept a price offered by any of our Cosmetic Buying Partners.
        </div>
        <div>
          All communications between you and any of our Cosmetic Buying Partners is subject to the terms and conditions of
          that Cosmetic Buying Partner, and we accept no responsibility for any deal, Cosmetic purchase, payment or disputes that
          may arise between you and the Cosmetic Buying Partner.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="6. Third Parties and Third Party Services">
        <div>
          In accordance with our{" "}
          <span
            className="cursor-pointer font-medium text-[#167DDD] hover:underline"
            onClick={() => setActiveCategory(0)}
          >
            Privacy Policy
          </span>
          , we may:
        </div>
        <ul className="ulWithDotListStyle">
          <li>
            provide your details to other third parties that supply related services and they may contact you to discuss
            these by email or telephone; and/or
          </li>
          <li>
            work with third parties (including, for example, advertising networks, analytics providers, automotive data
            providers, search information providers or social networks) and receive information about you from them
          </li>
        </ul>
        <div>You understand that this Website may contain:</div>
        <ul className="ulWithDotListStyle">
          <li>
            links to third party products, services, websites (including links to Cosmetic Buying Partner websites) and/or
            suppliers that are not affiliated with us. We have no control over these products, services or websites and
            we do not guarantee, endorse or take responsibility for them.
          </li>
          <li>
            advertising from third parties. We are not responsible for any misleading or inaccurate advertisements which
            are the sole responsibility of the advertiser. Any links or advertisements on this Website should not be
            taken as an endorsement by us of any kind.
          </li>
          <li>data provided by third parties. We accept no responsibility for any inaccuracies in this material.</li>
        </ul>
        <div>
          You agree to release us from claims or disputes of any kind arising from such third party content or in any
          way connected to such disputes with third parties.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="7. Website Content">
        The Services, including the content on this Website are provided for information only. We are not giving you any
        advice, investment, financial or otherwise in respect of your Cosmetic; or recommending or endorsing any Cosmetic Buying
        Partner or other third party service. You should obtain professional or specialist advice before taking, or
        refraining from, any action on the basis of the content on this Website.
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="8. User Content">
        <div>
          By submitting content on this Website or otherwise providing content to us – such as photographs of your Cosmetic,
          photographs of documents relating to you or your Cosmetic, or any personal financial information – (“User
          Content”), you grant us a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, sub-licensable and
          fully transferable licence to use, reproduce, display, sell, modify and edit the User Content. You waive any
          moral rights you may have in the User Content. You warrant and represent that you have all rights necessary to
          grant us these rights and that the content is not illegal, obscene, abusive, threatening, defamatory or
          otherwise objectionable to us.
        </div>
        <div>
          Any personal data that you provide via the Website, or we otherwise collect about you when you take up our
          Services or use the Website, will be governed by our{" "}
          <span
            className="cursor-pointer font-medium text-[#167DDD] hover:underline"
            onClick={() => setActiveCategory(0)}
          >
            Privacy Policy
          </span>
          .
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="9. Our Intellectual Property">
        <div>
          We, or our licensors, own all intellectual property rights in the Website, information and content available
          on the Website, any database operated by us, any proprietary software utilised by us to enable you to use this
          Website and the underlying source code (<strong>“Gear Technologies IP”</strong>). All rights are reserved.
        </div>
        <div>
          We grant you a revocable, non-exclusive, non-sub-licensable, non-transferable licence to use Gear Technologies
          IP only to the extent necessary to retrieve, display and print content pages for your own personal,
          non-commercial use of the Services and Website, subject to your compliance with these Terms of Use.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="10. Warranties about the Website">
        <div>
          The Website (including all content on it) is provided by us on an “as is” and “as available” basis. To the
          maximum extent permitted by the applicable law, we disclaim all warranties, representations or guarantees of
          any kind, either express or implied:
        </div>
        <ul className="ulWithDotListStyle">
          <li>
            regarding the Website (including its content), including as to quality, suitability for any purpose
            (including your needs), compatibility, reliability, accuracy, completeness, timeliness, access or use of
            information provided by any Cosmetic Buying Partner and/or is accessed or obtained by you via the Website, or
            otherwise through using our Services; or
          </li>
          <li>
            that the Website will operate continuously, without interruptions or be fault-free. From time to time, we
            may need to make the Website unavailable with or without notice to carry out maintenance or upgrade work. We
            accept no liability for any interruption or loss of service.
          </li>
        </ul>
        <div>
          Although we use reasonable endeavours to ensure that our Website does not contain or promulgate any viruses or
          other malicious code, we do not guarantee that our Website will be free from bugs, viruses or malicious code
          and we will not be liable for any loss or damage caused by viruses or other technologically harmful material
          that may infect your computer equipment, programs or data due to your use of our Website.
        </div>
        <div>
          We make this Website, including any offer or promotion of any Service, available for New Zealand residents
          only and we make no representations, guarantees or warranties that the Services are available or appropriate
          for use by those outside New Zealand.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="11. Pricing claims">
        <div>
          The aim of the Motorway service is to provide vehicle sellers with a simple, online way to get the best offer
          for their vehicle from Gear Technologies’ network of Cosmetic Buying Partners.
        </div>
        <div>
          We conduct analytical research on historic Cosmetic buyer offers shown on our website, actual sale prices from
          completed sales, and pricing variations over time.
        </div>
        <div>
          Where we make a claim such as “You could get up to $1,000 more”, this is based on an analysis between the
          highest and lowest offers from our Cosmetic Buying Partners across a large sample of enquiries, ensuring a
          significant proportion of customers achieve a variance of at least this figure if selecting the highest offer
          over the lowest.
        </div>
        <div>
          Comparison pricing data analysed always excludes offers from scrap or recycling firms, so that offers are
          compared on a ‘full value’ basis.
        </div>
        <div>
          Any claims relating to this research are subject to change over time and variance in samples. Research and
          related claims are updated regularly.
        </div>
        <div>For more information, please contact us at hello@gear.co.nz.</div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="12. Exclusions of our liability">
        <div>
          We will not be liable to you for any loss or damage (including, without limitation, any indirect or
          consequential loss), whether in contract, tort (including negligence), breach of statutory duty, or otherwise,
          even if foreseeable, arising under or in connection with:
        </div>
        <ul className="ulWithDotListStyle">
          <li>Your use of, or inability to use, this Website and/or our Services.</li>
          <li>
            Your use of, or reliance on, any content or software displayed on or provided through, our Services and/or
            Website.
          </li>
          <li>
            Any failure or delay in any component of our Website, the provision of any Service or the provision by a Cosmetic
            Buying Partner of its services to you or any third party.
          </li>
          <li>
            Any transaction or agreement between you and any Cosmetic Buying Partner, or attempt to enter into an agreement
            or transaction with any Cosmetic Buying Partner, such as the sale or purchase of a Cosmetic.
          </li>
        </ul>
        <div>
          Nothing in these Terms of Use excludes or limits our liability for death or personal injury arising from our
          negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or
          limited by New Zealand law.
        </div>
        <div>
          In the event that you are dissatisfied with, or dispute these Terms of Use, to the maximum extent permitted by
          law, your sole right and exclusive remedy is to cease to use our Website. Without prejudice to the preceding
          paragraphs of this section, our entire liability arising from or in relation to your use of our Website
          (whether in tort (including negligence), contract or otherwise) will be limited to fifty New Zealand dollars
          ($50) unless we otherwise agree in writing.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="13. Indemnification">
        You agree to indemnify, defend and hold us and our affiliated companies, shareholders, officers, directors,
        employees, agents or suppliers harmless from any and all claims or demands, made by any third party due to or
        arising out of: (i) your use of this Website, whether as a signed-up user who has conducted a vehicle valuation
        or otherwise; (ii) your breach of these Terms of Use; or (iii) the infringement by you of any intellectual
        property or other right of Gear Technologies or any other person or entity.
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="14. Restrictions on use of the Website and Services">
        <div>
          Use of the online valuation ‘tool’ on our Website is strictly for the use of private individuals wishing to
          sell a Cosmetic on their own behalf or on behalf of someone else in respect of whom they are legally authorised to
          act. It is strictly prohibited to use the valuation tool on our Website and the valuations provided for any
          business or commercial purposes.
        </div>
        <div>You must not (and you must not allow others to) :</div>
        <ul className="ulWithDotListStyle">
          <li>
            use an automated program (including, without limitation, any web-crawling or screen-scraping software or any
            equivalent technology or techniques), to view or access the Website or Services for the purpose of
            collecting, obtaining and/or accumulating (or other similar activity) data or content on our Website.
          </li>
          <li>
            attempt to gain unauthorised access to our Website or Services, the server on which our Website or Services
            is stored or any server, computer or database connected to our Website.
          </li>
          <li>
            reproduce, republish, transmit or distribute any content or information on this Website, or that form part
            of our Services, including as part of any database (electronic or otherwise), without our prior written
            consent.
          </li>
          <li>
            transmit any material designed to interrupt, damage, destroy or limit the functionality of our Website or
            Services or otherwise interfere with any other user’s enjoyment of our Website or Services.
          </li>
          <li>
            use our Website or Services other than for your own domestic personal use and always in accordance with
            these Terms of Use, any policy or other notice on our Website.
          </li>
          <li>
            attempt to copy our data or reverse engineer, disassemble or decompile our processes or any part of the
            Website or Services.
          </li>
          <li>
            use the Website or Services in any unlawful manner, for any unlawful purpose, or in any manner inconsistent
            with these Terms of Use, or act fraudulently or maliciously, for example, by introducing malicious code,
            including viruses, trojans and worms.
          </li>
          <li>
            use our Website or Services in any manner that is illegal, immoral or harmful to us (including to commit or
            facilitate the commitment of any fraud against us or any Cosmetic Buying Partner).
          </li>
          <li>
            infringe any rights (including intellectual property rights) belonging to us or any third party in relation
            to your use of the Website or Services, including not removing or altering any copyright notices that appear
            on our Website or Services.
          </li>
          <li>
            use this Website or the Services to conduct Cosmetic valuations for Cosmetic you do not own (unless you have received
            permission to do so from the owner), or submit false personal or contact information in order to obtain
            pricing data for a vehicle or multiple vehicles.
          </li>
        </ul>
        <div>
          We reserve the right, in our sole discretion and without notice to you, to terminate the licences granted to
          you in these Terms of Use and prevent future access by you of this Website and/or the Services if we have
          reasonable ground to believe you have breached these Terms of Use.
        </div>
      </SectionTermsOfUseContent>
      <SectionTermsOfUseContent title="15. General">
        <div>
          Nothing in these Terms of Use intends to deprive you of any rights you may be granted under applicable
          mandatory laws (including mandatory consumer protection laws).
        </div>
        <div>
          If we do not immediately insist that you do something you are required to under these Terms of Use, or if we
          delay in taking steps against you in respect of you breaking these Terms of Use, that will not prevent us from
          taking steps against you at a later date.
        </div>
        <div>
          If any provision or part-provision of these Terms of Use is or becomes invalid, illegal or unenforceable, it
          shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such
          modification is not possible, the relevant provision or part-provision shall be deemed deleted. Any such
          modification to or deletion shall not affect the validity and enforceability of the rest of these Terms of
          Use.
        </div>
        <div>
          Without prejudice to any other rights or remedies that we may have, you acknowledge and agree that damages
          alone would not be an adequate remedy for any breach of these Terms of Use by you. Accordingly, we shall be
          entitled to the remedies of injunction, specific performance or other equitable relief for any threatened or
          actual breach of these Terms of Use.
        </div>
        <div>
          These Terms of Use are governed by New Zealand law (including non-contractual disputes or claims) and you
          agree to that the New Zealand courts shall have non-exclusive jurisdiction over any dispute that may arise
          between you and us in relation to these Terms of Use.
        </div>
      </SectionTermsOfUseContent>
    </div>
  );
};

export default TermsOfUse;
