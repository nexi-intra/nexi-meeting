// -------------------------------------------------------------------
// Generated by 365admin-publish
// -------------------------------------------------------------------
/*
---
title: Core Version
---
*/
package cmds

import (
	"context"

	"github.com/magicbutton/magic-master/execution"
	"github.com/magicbutton/magic-master/utils"
)

func HealthCoreversionPost(ctx context.Context, args []string) (*string, error) {

	result, pwsherr := execution.ExecutePowerShell("john", "*", "magic-master", "00-health", "20-coreversion.ps1", "")
	if pwsherr != nil {
		return nil, pwsherr
	}
	utils.PrintSkip2FirstAnd2LastLines(string(result))
	return nil, nil

}
