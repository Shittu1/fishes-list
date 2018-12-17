// $(document).ready(function () {
//     $.getJSON("http://localhost:3000/fishes").then(function(fishes) {
//         fishes.forEach(function(fish) {
//             console.log("Let's see each fish", fish);
//         });
//     });
// });

//GET ALL FISHES
$(() => {
    let $container = $('#container');
    fetch("http://localhost:3000/fishes")
        .then((fishes) => fishes.json()).then((fish) => {
            fish.forEach(f => {
                let $newFish = $("<li>", {
                    html: `${f.name} : ${f.type}
                    <button class="delete">X</button>`,
                    "data-id": `${f.id}`
                });
                $container.append($newFish);
            });
        });

    //POST
    $("#new-fish-form").on("submit", function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const type = $("#type").val();
        fetch("http://localhost:3000/fishes", {
            method: "Post",
            body: JSON.stringify({ name, type }),
            headers: {
                'Content-type': "application/json"
            }
        })
            .then((fishes) => fishes.json())
            .then(function (fish) {
                let $newFish = $("<li>", {
                    html: `${fish.name} ${fish.type}
                    <button class="delete">X</button>`,
                    "data-id": `${fish.id}`
                });
                $container.append($newFish);
                $("#new-fish-form").trigger("reset");
            });
    });

    //delete
    fetch("http://localhost:3000/fishes", {
        method: "delete",
    })
        .then((fishes) => fishes.json()).then((fish) => {

            $container.on("click", ".delete", function (e) {
                e.preventDefault();
                const id = $(e.target)
                    .parent()
                    .data("id");
                const type = $
                    .ajax({
                        method: "DELETE",
                        url: `http://localhost:3000/fishes/${id}`
                    })
                    .then(function () {
                        $(e.target)
                            .parent()
                            .remove();
                    });
            });
            
        });

});

