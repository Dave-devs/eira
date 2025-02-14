import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function OurPolicy() {
    return (
        <section data-testid="policy-section" className="flex sm:flex-col md:flex-row items-center justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-gray-700 dark:text-gray-100">
            <div data-testid="exchange-policy">
                <RiExchangeFundsFill className="m-auto mb-5" size={48} />
                <p className="font-semibold dark:text-gray-100" data-testid="exchange-title">Easy Exchange Policy</p>
                <p className="text-gray-400" data-testid="exchange-description">We offer hassle free exchange policy</p>
            </div>
            <div data-testid="return-policy">
                <MdOutlineVerified className="m-auto mb-5" size={48} />
                <p className="font-semibold dark:text-gray-100" data-testid="return-title">7 Days Return Policy</p>
                <p className="text-gray-400" data-testid="return-description">We provide 7 days free return policy</p>
            </div>
            <div data-testid="support-policy">
                <RiCustomerService2Line className="m-auto mb-5" size={48} />
                <p className="font-semibold dark:text-gray-100" data-testid="support-title">Best customer support</p>
                <p className="text-gray-500 dark:text-gray-400" data-testid="support-description">We provide 24/7 customer support</p>
            </div>
        </section>
    );
}