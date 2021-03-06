var libs = {
    thymeleaf: require('/lib/thymeleaf')
};

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var view = resolve('grid-example.html'); // The view to render
    var model = createModel(); // The model to send to the view

    function createModel() {
        var model = {};
        return model;
    }

    return {
        body: libs.thymeleaf.render(view, model)
    };
}