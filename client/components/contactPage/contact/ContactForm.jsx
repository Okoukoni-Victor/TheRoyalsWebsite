"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

const enquiryTypes = [
  {
    label: "General Enquiry",
    defaultMessage: [
      "Hello The Royals Team,",
      "I would like to make an enquiry regarding your organisation, or initiatives. Kindly provide more information on this.",
      "Thank you.",
    ],
  },
  {
    label: "Partnership Enquiry",
    defaultMessage: [
      "Hello The Royals Team,",
      "I am interested in exploring a potential partnership with your organisation. I would like to learn more about collaboration opportunities and how we can work together.",
      "Looking forward to your response.",
    ],
  },
  {
    label: "Sponsorship Enquiry",
    defaultMessage: [
      "Hello The Royals Team,",
      "I am interested in supporting your initiatives through sponsorship. I would like to understand the available opportunities and how I can contribute to your impact.",
      "Thank you.",
    ],
  },
  {
    label: "Volunteer Enquiry",
    defaultMessage: [
      "Hello The Royals Team,",
      "I am interested in volunteering and contributing my time and skills to your initiatives. Kindly share more details on how I can get involved.",
      "Thank you.",
    ],
  },
  {
    label: "Initiative Proposal",
    defaultMessage: [
      "Hello The Royals Team,",
      "I would like to propose an idea for an initiative that aligns with your mission. Please find the details below:",
      "[Kindly describe your idea here].",
      "I look forward to your feedback.",
    ],
  },
];

const FORM_STATE = {
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactForm() {
  const [formState, setFormState] = useState(FORM_STATE.IDLE);
  const [pendingType, setPendingType] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState(enquiryTypes[0]);
  const [message, setMessage] = useState(
    enquiryTypes[0].defaultMessage.join("\n\n"),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if all required fields are filled
  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    enquiryType !== null &&
    message.trim() !== "";

  const handleSelectType = (type) => {
    // If there's already a selected type and the message has been modified
    if (
      enquiryType &&
      message !== enquiryType.defaultMessage.join("\n\n") &&
      message.trim() !== ""
    ) {
      setPendingType(type);
      setShowConfirmModal(true);
    } else {
      applySelection(type);
    }
  };

  const applySelection = (type) => {
    setEnquiryType(type);
    setMessage(type.defaultMessage.join("\n\n"));
  };

  const handleConfirmReplace = () => {
    if (pendingType) {
      applySelection(pendingType);
    }
    setPendingType(null);
    setShowConfirmModal(false);
  };

  const handleConfirmKeep = () => {
    setPendingType(null);
    setShowConfirmModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendContactEmail({
        fullName,
        email,
        phone,
        enquiryType: enquiryType.label,
        message,
      });

      if (result.success) {
        setFormState(FORM_STATE.SUCCESS);
      } else {
        setFormState(FORM_STATE.ERROR);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setFormState(FORM_STATE.ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setEnquiryType(null);
    setMessage("");
    setFormState(FORM_STATE.IDLE);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[20px] md:flex-[1.36] lg:flex-[1.68] rounded-[18px] border border-grey-50 px-[20px] md:px-[40px] py-[39px] bg-white"
    >
      {/* Confirmation Modal */}
      <Dialog
        open={showConfirmModal}
        onClose={handleConfirmKeep}
        transition
        className="relative z-50 transition duration-300 ease-out data-closed:opacity-0"
      >
        {/* Backdrop */}
        <DialogBackdrop className="fixed inset-0 bg-black/40" />

        {/* Modal */}
        <div className="fixed inset-0 flex justify-center items-center">
          <DialogPanel className="flex flex-col justify-center gap-[32px] w-full max-w-[345px] mx-4 shadow-xl rounded-[12px] p-[24px] bg-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                aria-hidden="true"
                focusable="false"
                className="mx-auto"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FEE4E2"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FEF3F2"
                  strokeWidth="8"
                />
                <path
                  d="M28 24V28M28 32H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                  stroke="#D92D20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <DialogTitle className="mt-[20px] mb-[10px] text-center !leading-[150%] !text-[20px] font-semibold text-grey-900">
                Do you want to continue?
              </DialogTitle>

              <Description className="text-center !leading-[100%] !text-[16px] font-medium text-grey-300">
                Selecting a new enquiry type will replace your current message.
              </Description>
            </div>

            <div className="flex gap-[12px]">
              <button
                type="button"
                onClick={handleConfirmKeep}
                className="w-full shadow-xs border border-grey-300 rounded-full px-[18px] py-[10px] !leading-[24px] !text-[16px] font-medium text-grey-700 bg-white hover:bg-grey-50 transition-colors duration-200"
              >
                Keep
              </button>

              <button
                type="button"
                onClick={handleConfirmReplace}
                className="w-full shadow-xs border border-error-600 rounded-full px-[18px] py-[10px] !leading-[24px] !text-[16px] font-medium text-white bg-error-600 hover:bg-error-600/80 transition-colors duration-200"
              >
                Replace
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Idle State */}
      {formState === FORM_STATE.IDLE && (
        <>
          <div className="flex flex-col lg:flex-row gap-[12px]">
            <div className="flex flex-col gap-[13px] w-full">
              <label
                htmlFor="fullName"
                className="w-fit !leading-[100%] !text-[16px] font-medium text-grey-300"
              >
                Full Name *
              </label>

              <input
                type="text"
                required
                name="fullName"
                id="fullName"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-[50px] border border-grey-100 rounded-[8px] px-[20px] !leading-[140%] !text-[16px] placeholder:text-grey-200 placeholder:opacity-[50%] bg-white"
              />
            </div>

            <div className="flex flex-col gap-[13px] w-full">
              <label
                htmlFor="emailAddress"
                className="w-fit !leading-[100%] !text-[16px] font-[500] text-grey-300"
              >
                Email Address *
              </label>

              <input
                type="email"
                required
                name="emailAddress"
                id="emailAddress"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[50px] border border-grey-100 rounded-[8px] px-[20px] !leading-[140%] !text-[16px] placeholder:text-grey-200 placeholder:opacity-[50%] bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[12px]">
            <div className="flex flex-col gap-[13px] w-full">
              <label
                htmlFor="phoneNumber"
                className="w-fit !leading-[100%] !text-[16px] font-[500] text-grey-300"
              >
                Phone Number (Optional)
              </label>

              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[50px] border border-grey-100 rounded-[8px] px-[20px] !leading-[140%] !text-[16px] placeholder:text-grey-200 placeholder:opacity-[50%] bg-white"
              />
            </div>

            <div className="w-full">
              <Field>
                <Label className="block w-fit mb-[13px] !leading-[100%] !text-[16px] font-[500] text-grey-300">
                  Enquiry Type *
                </Label>

                <Listbox
                  name="enquiryType"
                  value={enquiryType}
                  onChange={handleSelectType}
                >
                  <ListboxButton className="flex justify-between items-center w-full h-[50px] rounded-[8px] border border-grey-100 px-[20px] bg-white">
                    {({ open }) => (
                      <>
                        <span className="!leading-[140%] !text-[16px] text-grey-400">
                          {enquiryType.label}
                        </span>

                        <ChevronDown
                          aria-hidden="true"
                          className={`w-4 h-4 text-grey-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        />
                      </>
                    )}
                  </ListboxButton>

                  <ListboxOptions
                    modal={false}
                    anchor="bottom start"
                    transition
                    className="w-(--button-width) [--anchor-gap:4px] focus:outline-none shadow-md border border-grey-50 rounded-[8px] bg-white origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
                  >
                    {enquiryTypes.map((type) => (
                      <ListboxOption
                        key={type.label}
                        value={type}
                        className="cursor-pointer flex items-center h-[60px] not-last:border-b not-last:border-grey-50 px-[24px] !leading-[100%] !tracking-[-2%] capitalize !text-[14px] font-[500] text-grey-200 data-focus:bg-grey-50 transition-colors duration-150"
                      >
                        {type.label}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Listbox>
              </Field>
            </div>
          </div>

          <div className="flex flex-col gap-[13px] w-full">
            <label
              htmlFor="message"
              className="w-fit !leading-[100%] !text-[16px] font-[500] text-grey-300"
            >
              Message *
            </label>

            <textarea
              required
              name="message"
              id="message"
              placeholder="Tell us how we can help..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none h-[148px] border border-grey-100 rounded-[8px] p-[20px] !leading-[140%] !text-[16px] placeholder:text-grey-200 placeholder:opacity-[50%] bg-white"
            />
          </div>
        </>
      )}

      {/* Success State */}
      {formState === FORM_STATE.SUCCESS && (
        <div className="flex flex-col items-center gap-[41px]">
          <div className="relative w-[299px] lg:w-[456.96px] h-[175.36px] lg:h-[268px]">
            <Image
              src="/assets/contactFormSuccess.svg"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-center font-helixa !leading-[120%] !tracking-[-5%] !text-[24px] font-bold text-grey-900">
            Thank you for submitting the form, we'll contact you shortly.
          </p>
        </div>
      )}

      {/* Error State */}
      {formState === FORM_STATE.ERROR && (
        <div className="flex flex-col items-center gap-[41px]">
          <div className="relative w-[221px] lg:w-[280px] h-[201.7px] lg:h-[255.55px]">
            <Image
              src="/assets/contactFormError.svg"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-center font-helixa !leading-[120%] !tracking-[-5%] !text-[24px] font-bold text-grey-900">
            Oops! Something went wrong. Please try again.
          </p>
        </div>
      )}

      {/* Form Button */}
      <button
        type={formState === FORM_STATE.IDLE ? "submit" : "button"}
        disabled={
          formState === FORM_STATE.IDLE && (!isFormValid || isSubmitting)
        }
        onClick={formState !== FORM_STATE.IDLE ? handleReset : undefined}
        className={`h-[55px] rounded-full px-[20px] text-white bg-blue-300 transition-opacity duration-300 ${
          formState === FORM_STATE.IDLE && (!isFormValid || isSubmitting)
            ? "opacity-40 cursor-not-allowed"
            : "opacity-100 cursor-pointer hover:bg-blue-200"
        }`}
      >
        {formState === FORM_STATE.IDLE &&
          (isSubmitting ? (
            <span className="inline-flex justify-center items-center gap-2">
              <svg
                className="animate-spin w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          ))}
        {formState === FORM_STATE.SUCCESS && "Send New Message"}
        {formState === FORM_STATE.ERROR && "Try Again"}
      </button>
    </form>
  );
}
