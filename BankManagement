import React, { useState } from "react";
import {
	StyleButtonAddBanking,
	StylePagePersonContentMenu,
	StylePagePersonHeader,
	StylePagePersonWrapRight,
	StylePagePersonWrapBank,
	StyleAddBank,
} from "../StylePerson";
import ShowListBank from "./ShowListBank";
import { PersonalBank } from "../Personal";
import usegetBank from "../../hooks/useBank/useGetBank";
import DialogBankCreated from "./DialogBankCreated";

export default function BankManagement(props: {
	input: PersonalBank;
	setInput: (arrow: (val: PersonalBank) => PersonalBank) => void;
}) {
	const { bankInfo, reload } = usegetBank();
	const [openBankInformationDialog, setopenBankInformationDialog] = useState(false);
	return (
		<StylePagePersonWrapBank>
			<StylePagePersonHeader>Thông tin ngân hàng</StylePagePersonHeader>

			<StylePagePersonContentMenu>
				<ShowListBank
					bankInfo={bankInfo}
					setInput={props.setInput}
					reload={reload}
					input={props.input}
				/>
				<StyleAddBank>
					<StyleButtonAddBanking
						onClick={() => {
							setopenBankInformationDialog(true);
						}}>
						Thêm
					</StyleButtonAddBanking>
				</StyleAddBank>
			</StylePagePersonContentMenu>
			<DialogBankCreated
				openBankInformationDialog={openBankInformationDialog}
				setopenBankInformationDialog={setopenBankInformationDialog}
				reload={reload}
				setInput={props.setInput}
				input={props.input}
			/>
		</StylePagePersonWrapBank>
	);
}
