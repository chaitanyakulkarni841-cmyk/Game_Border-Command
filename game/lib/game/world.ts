/** Geography stays intact; the playable world is 20% smaller than the 20× release. */
export const WORLD_AREA_MULTIPLIER=16;
export const ENGAGEMENT_RANGE_MULTIPLIER=1.25;
// Clipped polygon-union areas, including the newly accessible northeast and islands.
// Baseline: cddb111; computed from bundled land masks and navigable rectangles.
export const LEGACY_LAND_AREA=555211.7692282742;
export const CURRENT_LAND_AREA=844688.4027708931;
export const WORLD_LINEAR_SCALE=Math.sqrt(WORLD_AREA_MULTIPLIER*LEGACY_LAND_AREA/CURRENT_LAND_AREA);
export const MOVEMENT_MULTIPLIER=3;
export const movementInMapUnits=(baseSpeed:number)=>baseSpeed*MOVEMENT_MULTIPLIER/WORLD_LINEAR_SCALE;
export const tacticalDistance=(value:number)=>value/WORLD_LINEAR_SCALE;
export const engagementDistance=(value:number)=>tacticalDistance(value)*ENGAGEMENT_RANGE_MULTIPLIER;
export const physicalDistance=(mapDistance:number)=>mapDistance*WORLD_LINEAR_SCALE;
