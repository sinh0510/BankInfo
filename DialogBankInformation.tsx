import React, { useState } from "react";
import { PersonalBank } from "../Personal";
import { UserFormWithdrawRequestButtonAccept, xStyleTextAlignCenterFooter } from "../StylePerson";
import CreateBankInfor from "./CreatebankInfor";
import { DialogWrapMedium } from "../../../../controls/components/dialogWrap/DialogWrap";
import useSubmitUpdateBank from "../../hooks/useBank/useSubmitBank";

interface IpropsFill {
	openBankInformationDialog: boolean;
	setopenBankInformationDialog: (value: boolean) => void;
	reload: () => void;
	input: PersonalBank;
	setInput: (arrow: (val: PersonalBank) => PersonalBank) => void;
}

export default function DialogBankInformation({
	input,
	openBankInformationDialog,
	reload,
	setInput,
	setopenBankInformationDialog,
}: IpropsFill) {
	const { useConfirmUpdateBank } = useSubmitUpdateBank();
	const [disabledButton, setDisableButton] = useState(false);
	const onchangeDisabled = (value: boolean) => {
		setDisableButton(value);
	};

	const onConfirmChange = async () => {
		useConfirmUpdateBank(input.bankName || "", input.bankOwner || "", input.bankCardId || "", reload);
		setopenBankInformationDialog(false);
	};
	return (
		<DialogWrapMedium
			open={openBankInformationDialog}
			onClose={() => setopenBankInformationDialog(false)}
			xStyleFooter={xStyleTextAlignCenterFooter}
			title="Thông tin ngân hàng"
			actions={
				<>
					<UserFormWithdrawRequestButtonAccept onClick={onConfirmChange}>
						Thêm
					</UserFormWithdrawRequestButtonAccept>
				</>
			}>
			<CreateBankInfor
				input={input}
				setInput={setInput}
				reload={reload}
				onchangeDisabled={onchangeDisabled}
				onClose={() => setopenBankInformationDialog(false)}
			/>
		</DialogWrapMedium>
	);
}
