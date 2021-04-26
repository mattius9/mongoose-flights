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
    .populate('destinations').exec(function(err,flight){
        Ticket.find({flight: flight._id}, function(err,tickets){
            res.render('flights/show', {title: 'Flight Details', flight, tickets
            });
        });
    });
}
function newFlight(req,res){
    res.render('flights/new', {title: 'Add Flight'});
}

function create(req,res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}
