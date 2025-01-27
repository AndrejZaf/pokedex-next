import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pokemon } from "@/types";
import React from "react";

export const PokemonMoves = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <Table className="text-md">
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">ID</TableHead>
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Levels Learned At</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pokemon.moves.map((move, index) => {
                    const levelsLearnedAt = move.version_group_details.map((version) => version.level_learned_at).join(", ");
                    return (
                        <TableRow key={move.move.name}>
                            <TableCell className="font-bold">{index + 1}</TableCell>
                            <TableCell className="capitalize">{move.move.name}</TableCell>
                            <TableCell>{levelsLearnedAt}</TableCell>
                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    );
};
