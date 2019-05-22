export const initializeOptions = payload => ({
  type: "INITIALIZE_OPTIONS",
  payload
});

export const updateComponentSize = () => ({
  type: "UPDATE_COMPONENT_SIZE"
});

export const sortColumns = payload => ({
  type: "SORT_COLUMNS",
  payload
});

export const setRowsPerPage = payload => ({
  type: "SET_ROWS_PER_PAGE",
  payload
});

export const setPage = payload => ({
  type: "SET_PAGE",
  payload
});

export const setIsScrolling = payload => ({
  type: "SET_IS_SCROLLING",
  payload
});

export const addRowEdited = payload => ({
  type: "ADD_ROW_EDITED",
  payload
});

export const setRowEdited = payload => ({
  type: "SET_ROW_EDITED",
  payload
});

export const saveRowEdited = payload => ({
  type: "SAVE_ROW_EDITED",
  payload
});

export const updateOptions = payload => ({
  type: "UPDATE",
  payload
});
