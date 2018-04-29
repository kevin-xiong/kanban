let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'kanban';
    window.document.title = title;
};

export default util;