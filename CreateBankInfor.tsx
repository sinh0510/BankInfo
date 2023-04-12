import React from "react";
import { PersonalBank } from "../Personal";
import { StylePagePersonContentInput, StylePagePersonContentRightInfo, StylePersonalLabelBank } from "../StylePerson";

export default function CreateBankInfor(props: {
	input: PersonalBank;
	reload: () => void;
	onClose: () => void;
	onchangeDisabled: (value: boolean) => void;
	setInput: (arrow: (val: PersonalBank) => PersonalBank) => void;
}) {
	const changeBankName = (val: string) => {
		props.setInput((prev: PersonalBank) => ({
			...prev,
			bankName: val,
		}));
	};
	const changeBankCardId = (val: string) => {
		props.setInput((prev: PersonalBank) => ({
			...prev,
			bankCardId: val,
		}));
	};
	const changeBankOwner = (val: string) => {
		props.setInput((prev: PersonalBank) => ({
			...prev,
			bankOwner: val,
		}));
	};
	return (
		<div>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Tên ngân hàng</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập tên ngân hàng"
					value={props.input.bankName || ""}
					onChange={(e) => changeBankName(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Số tài khoản</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Điền số tài khoản của bạn"
					value={props.input.bankCardId || ""}
					onChange={(e) => changeBankCardId(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Tên chủ thẻ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Điền tên chủ thẻ"
					value={props.input.bankOwner || ""}
					onChange={(e) => changeBankOwner(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
		</div>
	);
}
