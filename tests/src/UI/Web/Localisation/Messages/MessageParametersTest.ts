import { getBaseMessageParameters } from "zftsbqoz1g/Private/Tests/CommonTestUtils";
import { IMessageParameters } from "UI/Localisation/Interfaces/IMessageParameters";

export const MessageParametersTest: IMessageParameters = {
  ...getBaseMessageParameters(),
  addScoreBand_Label: undefined,
  addScoreBand_SrLabel: {
    scoreBandSectionIndex: 12345,
    scaleTag: "scaleTag",
    scoreType: "scoreType"
  },
  addScoreBandSection_Label: undefined,
  addScoreBandSection_SrLabel: {
    clientTag: "clientTag",
    packageTag: "packageTag"
  },
  cancel: undefined,
  client_Label: undefined,
  completeAllMissingFieldsBeforeSavingAndPublishing_Message: undefined,
  confirmation_Publish_Title: undefined,
  confirmation_UpdatesToContentWillBeLost_Title: undefined,
  confirmClientChange_Message: undefined,
  confirmPackageChange_Message: undefined,
  confirmPublish_Message: undefined,
  confirmScaleTagChange_Message: undefined,
  confirmScoreTypeChange_Message: undefined,
  deleteLastScoreBand_Label: undefined,
  deleteLastScoreBand_SrLabel: {
    scoreBandSectionIndex: 12345,
    scoreBandIndex: 23456,
    scaleTag: "scaleTag",
    scoreType: "scoreType"
  },
  deleteLastScoreBandSection_Label: undefined,
  deleteLastScoreBandSection_SrLabel: {
    scoreBandSectionIndex: 12345,
    clientTag: "clientTag",
    packageTag: "packageTag"
  },
  error_CompleteMissingFields_Title: undefined,
  error_Title: undefined,
  inactive: undefined,
  minSearchTextLength_Message: {
    minSearchTextLength: 12345
  },
  noPackage_Label: undefined,
  ok: undefined,
  package_Label: undefined,
  saveAndPublish_SuccessMessage: undefined,
  saveAndPublish_Title: undefined,
  scaleTag_Label: undefined,
  scaleTag_SrLabel: {
    scoreBandSectionIndex: 12345
  },
  scoreBandConfiguration_Client_Description: undefined,
  scoreBandConfiguration_Description: undefined,
  scoreBandConfiguration_Title: undefined,
  scoreBand_CutValueForScoreBandSection_Label: {
    scoreBandSectionIndex: 12345,
    scoreBandIndex: 23456,
    scaleTag: "scaleTag",
    scoreType: "scoreType"
  },
  scoreBand_CutValue_Label: undefined,
  scoreBand_LabelForScoreBandSection_Label: {
    scoreBandSectionIndex: 12345,
    scoreBandIndex: 23456,
    scaleTag: "scaleTag",
    scoreType: "scoreType"
  },
  scoreBand_Label_Label: undefined,
  scoreBands_Label: undefined,
  scoreType_Label: undefined,
  scoreType_SrLabel: {
    scoreBandSectionIndex: 12345
  },
  success_Title: undefined,
  unavailable: undefined
};