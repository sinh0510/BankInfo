import React from "react";
import { PersonalInfo } from "../Personal";
import {
	StyleBankCard,
	StyleBankCardId,
	StyleBankCardWrap,
	StyleBankName,
	StyleBankOwner,
	StyleCardFull,
	StylePagePersonContentInput,
	StylePagePersonContentRightInfo,
	StylePersonalLabelBank,
	StyleShadowBankCard,
} from "../StylePerson";

export default function CreateBankInformation(props: {
	reload: () => void;
	input: PersonalInfo;
	onClose: () => void;
	setInput: (arrow: (val: PersonalInfo) => PersonalInfo) => void;
	onchangeDisabled: (value: boolean) => void;
}) {
	const changeBankName = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			bankName: val,
		}));
	};
	const changeBankCardId = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			bankCardId: val,
		}));
	};
	const changeBankOwner = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			bankOwner: val,
		}));
	};

	return (
		<div>
			<StyleBankCardWrap>
				<StyleBankCard>
					<StyleCardFull>
						<StyleBankName>{props.input.bankName!}</StyleBankName>
						<StyleBankCardId>{props.input.bankCardId!}</StyleBankCardId>
						<StyleBankOwner>{props.input.bankOwner!}</StyleBankOwner>
					</StyleCardFull>
				</StyleBankCard>
				<StyleShadowBankCard></StyleShadowBankCard>
			</StyleBankCardWrap>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Tên ngân hàng</StylePersonalLabelBank>

				<StylePagePersonContentInput
					value={props.input.bankName || ""}
					placeholder="Nhập tên ngân hàng"
					onChange={(e) => changeBankName(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Số tài khoản</StylePersonalLabelBank>
				<StylePagePersonContentInput
					value={props.input.bankCardId || ""}
					placeholder="Điền số tài khoản của bạn"
					onChange={(e) => changeBankCardId(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Tên chủ thẻ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					value={props.input.bankOwner || ""}
					placeholder="Điền tên chủ thẻ"
					onChange={(e) => changeBankOwner(e.target.value)}
				/>
			</StylePagePersonContentRightInfo>
		</div>
	);
}
