import React, { useState } from "react";
import {
	BankInfo,
	BankInfoCardID,
	BankInfoInner,
	BankInfoWrap,
	BankTittle,
	StyleButtonBank,
	StyleButtonDeleteBanking,
	StyleButtonUpdateBanking,
} from "../StylePerson";
import { PersonalBank } from "../Personal";
import DialogBankUpdate from "./DialogBankUpdate";
import Bank from "../../../../../models/Bank";
import usegetBank from "../../hooks/useBank/useGetBank";
import useRemoveBank from "../../hooks/useBank/useRemoveBank";
import useAlertDialog from "../../../../hooks/useAlertDialog";
import { AlertType } from "../../../../hooks/common/useAttachAlertDialog";

export default function ShowListBank(props: {
	bankInfo: Bank[];
	input: PersonalBank;
	reload: () => void;
	setInput: (arrow: (val: PersonalBank) => PersonalBank) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { removeBank } = useRemoveBank();
	const [bankId, setBankId] = useState(0);
	const onRemoveBank = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn hủy thông tin ngân hàng này?",
			() => {},
			() => removeBank(id || 0).then(() => props.reload()),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
		props.reload();
	};

	const [openBankInformationDialog, setopenBankInformationDialog] = useState(false);

	return (
		<BankInfoWrap>
			{props.bankInfo.map((bankInfo) => {
				return (
					<BankInfo key={bankInfo.id}>
						<BankInfoInner>
							<BankTittle>Tên ngân hàng</BankTittle>
							<BankInfoCardID> {bankInfo?.bankName || ""}</BankInfoCardID>
						</BankInfoInner>
						<BankInfoInner>
							<BankTittle>Số tài khoản </BankTittle>
							<BankInfoCardID> {bankInfo?.bankCardId || ""}</BankInfoCardID>
						</BankInfoInner>
						<BankInfoInner>
							<BankTittle>Tên chủ tài khoản</BankTittle>
							<BankInfoCardID> {bankInfo?.bankOwner || ""}</BankInfoCardID>
						</BankInfoInner>
						<StyleButtonBank>
							<StyleButtonUpdateBanking
								onClick={() => {
									setopenBankInformationDialog(true);
									props.setInput((prev: PersonalBank) => ({
										bankName: bankInfo.bankName,
										bankCardId: bankInfo.bankCardId,
										bankOwner: bankInfo.bankOwner,
									}));
									setBankId(bankInfo.id || 0);
								}}>
								Chỉnh sửa
							</StyleButtonUpdateBanking>
							<StyleButtonDeleteBanking
								onClick={() => {
									onRemoveBank(bankInfo.id || 0);
								}}>
								Xóa
							</StyleButtonDeleteBanking>
						</StyleButtonBank>
					</BankInfo>
				);
			})}
			<DialogBankUpdate
				openBankInformationDialog={openBankInformationDialog}
				setopenBankInformationDialog={setopenBankInformationDialog}
				reload={props.reload}
				setInput={props.setInput}
				input={props.input}
				bankId={bankId}
			/>
		</BankInfoWrap>
	);
}
