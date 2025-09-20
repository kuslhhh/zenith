"use client"

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { CaretSortIcon, PlusCircledIcon } from '@radix-ui/react-icons'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'

const groups = [
   {
      label: "Personal Account",
      teams: [{
         label: "Kushal JADHAV"
      }]
   },
   {
      label: "Teams",
      teams: [{
         label: "KSH inc."
      }, {
         label: "SH inc."
      }, {
         label: "H inc."
      },]
   },
]

export default function TeamSwitcher() {
   return (
      <div>
         <Popover>
            <PopoverTrigger>
               <Button
                  variant={"outline"}
                  role='combobox'
                  aria-label='Select a team'
                  className='w-[200px] justify-between '
               >
                  <Avatar
                     className='mr-2 h-6 w-6'
                  >
                     <AvatarImage
                        src={"https://avatar.vercel.sh/kusha.png"}
                        alt='Avatar'
                     />
                     <AvatarFallback>KSH</AvatarFallback>
                  </Avatar>
                  KUSHAL JADHAV
                  <CaretSortIcon />
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className='w-80'
            >
               <Command>
                  <CommandInput placeholder='Search team...' />
                  <CommandList>
                     <CommandEmpty>No Team Found.</CommandEmpty>
                     {groups.map((group) => (
                        <CommandGroup
                           key={group.label}
                           heading={group.label}
                        >
                           {group.teams.map((team) => (
                              <CommandItem
                                 key={team.label}
                                 className='text-sm '
                              >
                                 <Avatar className='mr-2 h-5 w-5' >
                                    <AvatarImage
                                       alt={team.label}
                                       src={`http://avatar.vercel.sh/${team.label}.png`}
                                    />
                                    <AvatarFallback className='uppercase'>
                                       {team.label}
                                    </AvatarFallback>
                                 </Avatar>
                                 {team.label}
                              </CommandItem>
                           ))}
                        </CommandGroup>
                     ))}
                  </CommandList>
                  <CommandSeparator />
                  <CommandList>
                     <CommandGroup>
                        <CommandItem>
                           <PlusCircledIcon className='mr-2 h-5 w-5' />
                           Create Team
                        </CommandItem>
                     </CommandGroup>
                  </CommandList>
               </Command>

            </PopoverContent>
         </Popover>
      </div>

   )
}
