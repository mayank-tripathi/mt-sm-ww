import { en as commonEn } from "zftsbqoz1g/Public/UI/Localisation/Common/Messages/en";
import { LocalisationMessages } from "UI/Localisation/LocalisationMessages";

export const en = new LocalisationMessages({
  ...commonEn.allMessages,
  error: "Error",
  message1: "This is message 1",
  message2: "This is message 2 with param {param1}",
  requestMessageLabel: "Request Message",
  requestMessageRequired: "Request message is required",
  requestMessageSubmitTitle: "Submit",
  title: "Sample Form"
});