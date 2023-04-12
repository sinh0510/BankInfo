import React, { useState } from "react";
import { PersonalBank } from "../Personal";
import { UserFormWithdrawRequestButtonAccept, xStyleTextAlignCenterFooter } from "../StylePerson";
import useSubmitUpdateBank from "../../hooks/useBank/useUpdateBank";
import { DialogWrapMedium } from "../../../../controls/components/dialogWrap/DialogWrap";
import UpdateBankInfor from "./UpdateBankInfor";

interface IpropsFill {
	openBankInformationDialog: boolean;
	setopenBankInformationDialog: (value: boolean) => void;
	reload: () => void;
	input: PersonalBank;
	setInput: (arrow: (val: PersonalBank) => PersonalBank) => void;
	bankId: number;
}

export default function DialogBankUpdate({
	bankId,
	input,
	openBankInformationDialog,
	reload,
	setInput,
	setopenBankInformationDialog,
}: IpropsFill) {
	const { useUpdateBank } = useSubmitUpdateBank();

	const [disabledButton, setDisableButton] = useState(false);
	const onchangeDisabled = (value: boolean) => {
		setDisableButton(value);
	};

	const onUpdateBank = async () => {
		useUpdateBank(input.bankName || "", input.bankCardId || "", input.bankOwner || "", bankId, reload);
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
					<UserFormWithdrawRequestButtonAccept onClick={onUpdateBank}>
						Cập nhật
					</UserFormWithdrawRequestButtonAccept>
				</>
			}>
			<UpdateBankInfor
				input={input}
				setInput={setInput}
				reload={reload}
				onchangeDisabled={onchangeDisabled}
				onClose={() => setopenBankInformationDialog(false)}
			/>
		</DialogWrapMedium>
	);
}
