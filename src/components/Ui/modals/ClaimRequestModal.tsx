import React from "react";
import FxModal from "./FxModal";
import FxForm from "../../form/FxForm";
import FxInput from "../../form/FxInput";
import FxTextArea from "../../form/FxTextArea";
import { Button } from "@nextui-org/button";
import { useAddClaimRequest } from "@/src/hooks/claimRequest.hook";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
  const { mutate: handleClaimrequest, isPending } = useAddClaimRequest();
  const onSubmit = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith("answer"))
        .map((answer) => data[answer]),
    };

    handleClaimrequest(claimRequestData);
  };
  return (
    <FxModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="claim Request"
    >
      <FxForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className="mb-4" key={index}>
            <p> {question} </p>
            <FxInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}

        <FxTextArea label="Description" name="description" />
        <Button
          size="lg"
          variant="solid"
          className="flex-1 w-full mt-2"
          type="submit"
        >
          {isPending ? "sending...." : "Send"}
        </Button>
      </FxForm>
    </FxModal>
  );
};

export default ClaimRequestModal;
