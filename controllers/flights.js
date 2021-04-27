const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function index(req,res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function show(req,res){
    Flight.findById(req.params.id)
    .exec(function(err,flight){
        Ticket.find({flight: flight._id}, function(err,tickets){
            res.render('flights/show', {title: 'Flight Details', flight, tickets
            });
        });
    });
}
function newFlight(req,res){
    const flight = new Flight(req.body);
    const defaultTime = flight.departs;
    console.log(defaultTime);
    res.render('flights/new', {title: 'Add Flight', defaultTime});
}

function create(req,res){
    const flight = new Flight(req.body);
    console.log(req.body.departs);
    flight.save(function(err){
        if(err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}
