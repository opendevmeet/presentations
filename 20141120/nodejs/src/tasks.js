var tasks = ['ToDo something'];

module.exports = {
    find: function(id) {
        return tasks[id];
    },
    add: function(data) {
        return tasks.push(data) - 1;
    },
    delete: function(id) {
        delete tasks[id];
        return id;
    },
    findAll: function() {
        return tasks;
    }
};

