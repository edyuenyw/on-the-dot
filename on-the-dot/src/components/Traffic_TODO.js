/*

Form to search just melbourne traffic for now
Form to do search from vic traffic api
so requires:
1.  api key
2.  endpoint
3.  results json return
4.  cache

https://data-exchange-api.vicroads.vic.gov.au/bluetooth_data/routes
https://data-exchange.vicroads.vic.gov.au/docs/services/get-road-closures/operations/all-closures/console

{
 "id": "ERC077472",
 "incident_type": "Emergency Works",
 "incident_status": "active",
 "comms_comment": "The inbound exit to the Princes Highway is closed for level crossing removal works. Motorists should use the earlier exit at Sneydes Road. The left lane is also closed citybound on the Princes Freeway approaching the Princes Highway exit ramp. ",
 "road_closure_type": "Traffic Alert",
 "incident_publish": "1",
 "declared_road_number": "2500",
 "declared_road_name": "PRINCES FREEWAY WEST ",
 "declared_road_direction": "Reverse",
 "closed_road_name": "PRINCES FREEWAY WEST ",
 "closed_road_srns": "M1",
 "closed_road_rma_class": "FW",
 "closed_road_lga": "WYNDHAM",
 "closed_road_vr_region": "METRO NORTH WEST",
 "closed_road_ses_region": "MELBOURNE METROPOLITAN (CENTRAL)",
 "closed_road_tram": null,
 "closed_road_bus": null,
 "start_int_road_name": "PRINCES IN-PRINCES RAMP OF",
 "start_int_distance": "182",
 "start_direction": "North",
 "start_int_locality": "WERRIBEE",
 "incident_melway": "206K4",
 "incident_vcsd": "435 J13",
 "end_int_road_name": null,
 "end_int_distance": "0",
 "end_int_direction": null,
 "end_int_locality": null,
 "dt_created": "2020-08-03T09:32:51+10:00",
 "dt_updated": "2020-08-03T09:32:51+10:00",
 "dt_publish_until": "2000-01-01T00:00:00+11:00",
 "dt_last_ln_update": "2020-08-03T09:35:06+10:00",
 "midpnt_lat": "0",
 "midpnt_long": "0",
 "geo_line": null,
 "geo_point": "-37.8860205603443,144.709045927579"  -- CAN BE PLUGGED IN TO GOOGLE MAP
}

*/
