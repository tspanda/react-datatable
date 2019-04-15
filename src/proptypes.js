import PropTypes from "prop-types";

export const initializeOptionsPropType = PropTypes.func.isRequired;
export const initializeCustomComponentsPropType = PropTypes.func.isRequired;

export const cellValPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool
]);

// Options propstype
export const titlePropType = PropTypes.string;
export const widthPropType = PropTypes.string;
export const heightPropType = PropTypes.string;
export const keyColumnPropType = PropTypes.string;
export const fontPropType = PropTypes.string;
export const idPropType = PropTypes.string;
export const labelPropType = PropTypes.string;
export const colSizePropType = PropTypes.number;
export const editablePropType = PropTypes.boolean;
export const dataTypePropType = PropTypes.string;
export const inputTypePropType = PropTypes.string;
export const dateFormatPropType = PropTypes.string;
export const valuesPropType = PropTypes.array;
export const requiredPropType = PropTypes.boolean;
export const valueVerificationPropType = PropTypes.func;
export const rowPropType = PropTypes.object;
export const rowsPropType = PropTypes.arrayOf(rowPropType);
export const canEditPropType = PropTypes.boolean;
export const canPrintPropType = PropTypes.boolean;
export const canDownloadPropType = PropTypes.boolean;
export const canSearchPropType = PropTypes.boolean;
export const canRefreshRowsPropType = PropTypes.boolean;
export const canFilterColumnsPropType = PropTypes.boolean;
export const canSaveUserConfigurationPropType = PropTypes.boolean;
export const columnsOrderPropType = PropTypes.arrayOf(PropTypes.string);
export const copyToClipboardPropType = PropTypes.boolean;
export const availablePropType = PropTypes.arrayOf(PropTypes.number);
export const selectedPropType = PropTypes.number;
export const rowsSelectablePropType = PropTypes.boolean;
export const selectPageRowsPropType = PropTypes.boolean;
export const selectAllRowsPropType = PropTypes.boolean;
export const tooltipPropType = PropTypes.string;
export const iconPropType = PropTypes.element;
export const positionPropType = PropTypes.number;
export const onClickPropType = PropTypes.func;
export const headOfTheTablePropType = PropTypes.element;
export const bodyOfTheTablePropType = PropTypes.element;

export const datatablePropType = PropTypes.shape({
  width: widthPropType.isRequired
});

export const headerPropType = PropTypes.shape({
  height: heightPropType.isRequired
});

export const bodyPropType = PropTypes.shape({
  height: heightPropType.isRequired
});

export const rowDimensionPropType = PropTypes.shape({
  height: heightPropType.isRequired
});

export const dimensionsPropType = PropTypes.shape({
  datatable: datatablePropType,
  header: headerPropType,
  body: bodyPropType,
  row: rowDimensionPropType
});

export const columnPropType = PropTypes.shape({
  id: idPropType.isRequired,
  label: labelPropType.isRequired,
  colSize: colSizePropType,
  editable: editablePropType,
  dataType: dataTypePropType,
  inputType: inputTypePropType,
  dateFormat: dateFormatPropType,
  values: valuesPropType,
  required: requiredPropType,
  valueVerification: valueVerificationPropType
});

export const columnsPropType = PropTypes.arrayOf(columnPropType);

export const dataPropType = PropTypes.shape({
  columns: columnsPropType,
  rows: rowsPropType
});

export const userConfigurationPropType = PropTypes.shape({
  columnsOrder: columnsOrderPropType,
  copyToClipboard: copyToClipboardPropType
});

export const rowsPerPagePropType = PropTypes.shape({
  available: availablePropType,
  selected: selectedPropType
});

export const selectionPropType = PropTypes.shape({
  rowsSelectable: rowsSelectablePropType,
  selectPageRows: selectPageRowsPropType,
  selectAllRows: selectAllRowsPropType
});

export const additionalIconsPropType = PropTypes.shape({
  tooltip: tooltipPropType,
  icon: iconPropType.isRequired,
  position: positionPropType,
  onClick: onClickPropType.isRequired
});

export const selectionIconsPropType = PropTypes.shape({
  tooltip: tooltipPropType,
  icon: iconPropType.isRequired,
  position: positionPropType,
  onClick: onClickPropType.isRequired
});

export const featuresPropType = PropTypes.shape({
  canEdit: canEditPropType,
  canPrint: canPrintPropType,
  canDownload: canDownloadPropType,
  canSearch: canSearchPropType,
  canRefreshRows: canRefreshRowsPropType,
  canFilterColumns: canFilterColumnsPropType,
  canSaveUserConfiguration: canSaveUserConfigurationPropType,
  userConfiguration: userConfigurationPropType,
  rowsPerPage: rowsPerPagePropType,
  selection: selectionPropType,
  additionalIcons: PropTypes.arrayOf(additionalIconsPropType),
  selectionIcons: PropTypes.arrayOf(selectionIconsPropType)
});

export const optionsPropType = PropTypes.shape({
  title: titlePropType,
  dimensions: dimensionsPropType,
  keyColumn: keyColumnPropType.isRequired,
  font: fontPropType,
  data: dataPropType.isRequired,
  features: featuresPropType
});

export const CustomTableBodyRowPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableBodyCellPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableHeaderRowPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableHeaderCellPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);

export const customDataTypePropType = PropTypes.shape({
  dataType: dataTypePropType.isRequired,
  component: componentPropType.isRequired
});

export const customDataTypesPropType = PropTypes.arrayOf(
  customDataTypePropType
);

export const indexPropType = PropTypes.number;