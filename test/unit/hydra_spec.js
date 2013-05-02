'use strict';

/* jasmine specs for HYDRA vis */

describe('Evenly placed points on a circle', function() {

    it('should be defined', function() {
        expect(evenly_spaced_points_on_a_circle).toBeDefined();
    });


    it("should return an array", function() {
      var returned = evenly_spaced_points_on_a_circle( 1 );
      expect( toString.call(returned) === "[object Array]" ).toBe( true );
    });


    it("should return an array of objects", function() {
      var returned = evenly_spaced_points_on_a_circle( 1 );
      expect( toString.call(returned[0]) === "[object Object]" ).toBe( true );
    });


    it("should return an array of objects with x and y properties", function() {
      var returned = evenly_spaced_points_on_a_circle( 1 );
      expect( returned[0].x ).toBeDefined();
      expect( returned[0].y ).toBeDefined();
    });


    it("should return an array containing the number of objects required by the parameter n", function() {
      var n = 8;
      var returned = evenly_spaced_points_on_a_circle( n );
      expect( returned.length ).toEqual( n );

      n = 21;
      returned = evenly_spaced_points_on_a_circle( n );
      expect( returned.length ).toEqual( n );
    });


    it("should return x coords all within radius distance of centre_x", function() {
        var radius  = 100,
            centre_x = 0;
        var returned = evenly_spaced_points_on_a_circle( 5, radius, centre_x, 0 );
        var max = _.max( _.map( _.pluck( returned, 'x'), function(x) {
            return Math.abs( x );
        } ) );

        expect( max ).toBeLessThan( radius + 1 );
    });


    it("should return y coords all within radius distance of centre_y", function() {
        var radius  = 100,
            centre_y = 0;
        var returned = evenly_spaced_points_on_a_circle( 5, radius, 0, centre_y );
        var max = _.max( _.map( _.pluck( returned, 'y'), function(y) {
            return Math.abs( y );
        } ) );

        expect( max ).toBeLessThan( radius + 1 );
    });


    it("should return x coords where difference between min and max values is greater than radius", function() {
      var radius = 100;
      var returned = evenly_spaced_points_on_a_circle( 5, radius, 0, 0 );
      var dx = _.max( _.pluck( returned, 'x' ) ) - _.min( _.pluck( returned, 'x' ) );

      expect( dx ).toBeGreaterThan( radius );
    });


    it("should return y coords where difference between min and max values is greater than radius", function() {
      var radius = 100;
      var returned = evenly_spaced_points_on_a_circle( 5, radius, 0, 0 );
      var dy = _.max( _.pluck( returned, 'y' ) ) - _.min( _.pluck( returned, 'y' ) );

      expect( dy ).toBeGreaterThan( radius );
    });

});